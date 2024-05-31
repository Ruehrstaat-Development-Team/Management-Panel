export default (prefix: string, error_uid: string) => {
  return `${prefix}_${error_uid.replaceAll('-', '_')}`;
}
