import { ComponentMeta, Story } from "@storybook/react";
import Button, {
  ButtonProps,
  ButtonSize,
  ButtonVariant,
} from "../../components/Button/Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  text: "Submit",
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.SMALL,
};

export const MediumPrimary = Template.bind({});
MediumPrimary.args = {
  text: "Submit",
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.MEDIUM,
  type: "button",
};

export const MediumSecondary = Template.bind({});
MediumSecondary.args = {
  text: "Submit",
  variant: ButtonVariant.SECONDARY,
  size: ButtonSize.MEDIUM,
  type: "button",
};

export const LargeTertiary = Template.bind({});
LargeTertiary.args = {
  text: "Submit",
  variant: ButtonVariant.TERTIARY,
  size: ButtonSize.LARGE,
  type: "button",
};

export const All = () => {
  return (
    <div className="flex flex-col items-start gap-6" style={{ width: "500px" }}>
      <div className="flex items-start justify-between w-full gap-2">
        <Button
          text={"Primary Small"}
          variant={ButtonVariant.PRIMARY}
          size={ButtonSize.SMALL}
        ></Button>
        <Button
          text={"Primary Medium"}
          variant={ButtonVariant.PRIMARY}
          size={ButtonSize.MEDIUM}
        ></Button>
        <Button
          text={"Primary Large"}
          variant={ButtonVariant.PRIMARY}
          size={ButtonSize.LARGE}
        ></Button>
      </div>
      <div className="flex items-start justify-between w-full gap-2">
        <Button
          text={"Secondary Small"}
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.SMALL}
        ></Button>
        <Button
          text={"Secondary Medium"}
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.MEDIUM}
        ></Button>
        <Button
          text={"Secondary Large"}
          variant={ButtonVariant.SECONDARY}
          size={ButtonSize.LARGE}
        ></Button>
      </div>
      <div className="flex items-start justify-between w-full gap-2">
        <Button
          text={"Tertiary Small"}
          variant={ButtonVariant.TERTIARY}
          size={ButtonSize.SMALL}
        ></Button>
        <Button
          text={"Tertiary Medium"}
          variant={ButtonVariant.TERTIARY}
          size={ButtonSize.MEDIUM}
        ></Button>
        <Button
          text={"Tertiary Large"}
          variant={ButtonVariant.TERTIARY}
          size={ButtonSize.LARGE}
        ></Button>
      </div>
    </div>
  );
};
