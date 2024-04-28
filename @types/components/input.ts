type InputData = {
    label: string | undefined;
    placeholder: string | undefined;
    type: string | undefined;
    error: string | Ref<string> | undefined;
    disabled: boolean | undefined;
    loading: boolean | undefined;
    autocomplete: string | undefined;
    button: ButtonData | undefined;
}