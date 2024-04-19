type InputData = {
    label: Ref<string | undefined>;
    placeholder: Ref<string | undefined>;
    type: Ref<string | undefined>;
    error: Ref<string | undefined>;
    disabled: Ref<boolean | undefined>;
    loading: Ref<boolean | undefined>;
    button: Ref<ButtonData | undefined>;
}

type InputDataInternal = {
    label: string | undefined;
    placeholder: string | undefined;
    type: string | undefined;
    error: string | undefined;
    disabled: boolean | undefined;
    loading: boolean | undefined;
    button: ButtonData | undefined;
}