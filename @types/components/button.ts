type ButtonData = {
  text: Ref<string | undefined>;
  icon: Ref<string | undefined>;
  disabled: Ref<boolean | undefined>;
  loading: Ref<boolean | undefined>;
};
type ButtonDataInternal = {
  text: string | undefined;
  icon: string | undefined;
  disabled: boolean | undefined;
  loading: boolean | undefined;
};