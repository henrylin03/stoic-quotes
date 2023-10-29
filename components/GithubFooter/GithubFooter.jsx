import { Tooltip, ActionIcon } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

export default function GitHubFooter() {
  return (
    <Tooltip label="Link to GitHub" color="gray" position="bottom" offset={11}>
      <ActionIcon
        component="a"
        href="https://github.com/henrylin03/"
        target="_blank"
        variant="outline"
        color="grey"
        size="xl"
        radius="xl"
        aria-label="Link to GitHub"
      >
        <IconBrandGithub stroke={2.5} />
      </ActionIcon>
    </Tooltip>
  );
}
