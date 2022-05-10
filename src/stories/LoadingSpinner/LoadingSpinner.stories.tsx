import { ComponentMeta, Story } from "@storybook/react";
import LoadingSpinner, {
  LoadingSpinnerProps,
} from "../../components/LoadingSpinner/LoadingSpinner";

export default {
  argTypes: {
    color: {
      options: ["bg-red-200", "bg-indigo-700", "bg-black"],
      control: { type: "select" },
    },
  },
  title: "Loading Spinner",
  component: LoadingSpinner,
} as ComponentMeta<typeof LoadingSpinner>;

const Template: Story<LoadingSpinnerProps> = (args) => (
  <LoadingSpinner {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  isLoading: true,
};

export const WithText = Template.bind({});
WithText.args = {
  isLoading: true,
  text: "Loading...",
};
