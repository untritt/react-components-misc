import getImagePaths from ".";

describe("#getImagePaths", () => {
  test("should return array of image urls", async () => {
    expect.assertions(1);

    const images = await getImagePaths();

    expect(images).toHaveLength(11);
  });
});
