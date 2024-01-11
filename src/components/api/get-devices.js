export async function getUserDevices() {
  await setTimeout(() => {}, 2500);
  return [{ name: "1" }, { name: "2" }, { name: "3" }];
}
