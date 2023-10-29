import { ActionIcon } from "@mantine/core";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function GitHubFooter() {
  return (
    <ActionIcon
      component="a"
      href="https://github.com/henrylin03/"
      target="_blank"
      variant="subtle"
      color="black"
      size="xl"
      radius="xl"
      aria-label="Link to GitHub"
    >
      <GitHubLogoIcon style={{ width: "80%", height: "80%" }} />
    </ActionIcon>
  );
}
