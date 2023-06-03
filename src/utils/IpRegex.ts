
export const IpRegex = (ip: string) => {
  const regex = /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}):(\d{1,5})$/;
  return regex.test(ip);
}
