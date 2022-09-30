import { graphQlHandlers } from "@/mock/handles";
import Card from "./Card.vue";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
};

type Templates = {
  bind: (arg: unknown) => {
    parameters: unknown;
  };
};

const Template: Templates = () => ({
  components: { Card },
  template: "<Card />",
});

export const Default = Template.bind({});

Default.parameters = {
  msw: {
    handlers: graphQlHandlers,
  },
};
