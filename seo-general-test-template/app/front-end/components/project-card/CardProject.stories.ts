import type { Meta, StoryObj } from "@storybook/react";
import CardProject from "./CardProject";

// const meta: Meta<typeof CardProject> = {
//   title: "Components/CardProject",
//   component: CardProject,
//   tags: ["autodocs"],
// };

// export default meta;

// type Story = StoryObj<typeof CardProject>;

// export const Default: Story = {
//   args: {
//     projectName: "Example Project",
//     projectId: 0,
//     imgAltText: "Project Cover",
//   },
//   argTypes: {
//     imgSrc: {
//       control: false,
//     },
//   },
// };

// export const WithImgUrl: Story = {
//   args: {
//     ...Default.args,
//     imgSrc: `https://icon.horse/icon/www.youtube.com`,
//   },
// };

const meta: Meta<typeof CardProject> = {
  argTypes: {
    expiredDate: {
      control: { type: "text" },
    },
    // onClickAddQuantity: {
    //   control: false,
    // },
    // onClickAddToWishlist: {
    //   control: false,
    // },
    // onClickRemoveQuantity: {
    //   control: false,
    // },
  },
  component: CardProject,
  tags: ["autodocs"],
  title: "Components/CardProduct",
};

export default meta;

type Story = StoryObj<typeof CardProject>;

export const Default: Story = {
  args: {
    // addQuantityAltText: "Add quantity",
    // addToWishlistAltText: "Add to wishlist button",
    discountPrice: "AED 17.50",
    // disabled: false,
    expiredDate: "Exp.D. 12/25/2023",
    imgAltText: "Product cover",
    // isAddedToWishlist: false,
    isShowRibbon: true,
    // onClickAddQuantity: () => {},
    // onClickAddToWishlist: () => {},
    // onClickRemoveQuantity: () => {},
    price: "AED 17.50",
    productDetailsUrl: "/",
    productTitle: "Yopokki Spicy Topokki Halal",
    // purchaseText: "Buy Now",
    // quantity: 0,
    // removeQuantityAltText: "Remove quantity",
    ribbonText: "New",
    // ribbonVariant: "primary",
    weight: "140g",
  },
  argTypes: {
    imgSrc: {
      control: false,
    },
  },
};

export const WithImageUrl: Story = {
  args: {
    ...Default.args,
    imgSrc: `https://icon.horse/icon/www.youtube.com`,
  },
};
