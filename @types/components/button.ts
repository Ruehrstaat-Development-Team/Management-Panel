type ButtonDataRef = {
  text: string;
  icon: string | undefined;
  disabled: Ref<boolean | undefined>;
  loading: Ref<boolean | undefined>;
};
type ButtonData = {
  text: string;
  icon: string | undefined;
  disabled: boolean | undefined;
  loading: boolean | undefined;
};