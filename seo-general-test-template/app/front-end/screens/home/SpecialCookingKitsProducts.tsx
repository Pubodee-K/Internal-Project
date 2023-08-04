"use client";

import { CardProject } from "@/app/front-end/components/card-project";

import { cn } from "@/app/front-end/utils/cn";

import type { SpecialCookingKitsProductsProps } from "./types";
import { project_name_join_all } from "@/types/interfaces";
import { getAllData } from "@/utils/supabase-fetch";
import { useEffect, useState } from "react";
import { getImageFormat } from "../../utils/get-image-format";

export default function SpecialCookingKitsProducts({
  className = "",
  ...props
}: SpecialCookingKitsProductsProps) {
  const [projects, setProjects] = useState<any>([]);

  const fetchData = async () => {
    const supabaseData: project_name_join_all[] = (
    await getAllData(
      "project_names",
      "*, favicons(favicons), urls(url)",
    )
  );
  setProjects(supabaseData);
  }

  useEffect(() => {
    fetchData();
  }, [])  

  return (
    <div
      {...props}
      className={cn(
        "flex flex-wrap items-start justify-start gap-2.5 lg:gap-4",
        className
      )}
    >
      {projects.map((project: project_name_join_all) => {        
        const favicon = project.favicons.pop();
        const base64 = getImageFormat(favicon?.favicons!);
        console.log(base64, 'base64');
        
        return (
          <CardProject
            key={project.id}
            projectId={project.id}
            projectTitle={project.name}
            description={project.description}
            className=""
            imgAltText={`${project.name} Project Cover`}
            imgSrc={getImageFormat(favicon?.favicons!)}
            projectDetailsUrl={`/x`}
          />
        )
      })}
    </div>
  );
}
