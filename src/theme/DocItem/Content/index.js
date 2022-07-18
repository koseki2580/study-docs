import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
*/
function useSyntheticTitle() {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === "undefined";
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}
export default function DocItemContent({ children }) {
  const syntheticTitle = useSyntheticTitle();
  const { colorMode, setColorMode } = useColorMode();
  const title = children.type.frontMatter.title;
  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
      <Giscus
        id="comments"
        repo="koseki2580/study-docs"
        repoId="R_kgDOHVqENw"
        category="Comments"
        categoryId="DIC_kwDOHVqEN84CQI59"
        mapping="specific"
        term={title}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={colorMode}
        lang="ja"
        loading="lazy"
      />
    </div>
  );
}
