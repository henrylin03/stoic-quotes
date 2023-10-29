import { ActionIcon } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

export default function GitHubFooter() {
  return (
    <ActionIcon
      variant="outline"
      color="grey"
      size="xl"
      radius="xl"
      aria-label="Link to GitHub"
    >
      <IconBrandGithub stroke={2.5} />
    </ActionIcon>
  );
}
