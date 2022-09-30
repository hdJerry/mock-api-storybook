import Posts from "./Posts.vue";
import { apiHandlers } from "@/mock/handles";

export default {
  title: "Components/Posts",
  component: Posts,
  argTypes: {},
};

type Templates = {
  bind: (arg: unknown) => {
    parameters: unknown;
  };
};
const Template: Templates = () => ({
  components: { Posts },
  template: "<Posts />",
});

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: apiHandlers,
  },
};
