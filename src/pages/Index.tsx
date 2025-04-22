
import { CodeBlock } from "@/components/CodeBlock";
import { DocsLayout } from "@/components/DocsLayout";

const Index = () => {
  return (
    <DocsLayout>
      <div className="max-w-3xl">
        <div className="mb-4 flex flex-col items-start gap-1">
          <h5 className="text-sm font-medium text-muted-foreground">Layout</h5>
          <h1 className="text-3xl font-bold tracking-tight">Overflow</h1>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-muted-foreground">
          Utilities for controlling how an element handles content that is too large for the container.
        </p>

        <div className="my-6 overflow-hidden rounded-md border">
          <div className="bg-muted px-4 py-3 font-mono text-sm border-b">
            Class
          </div>
          <div className="bg-muted px-4 py-3 font-mono text-sm border-b border-l-0 border-r-0">
            Properties
          </div>
          <div className="grid grid-cols-2">
            <div className="border-r p-4 font-mono text-sm">
              <div className="mb-2 text-blue-600">overflow-auto</div>
              <div className="mb-2 text-blue-600">overflow-hidden</div>
              <div className="mb-2 text-blue-600">overflow-clip</div>
              <div className="mb-2 text-blue-600">overflow-visible</div>
              <div className="mb-2 text-blue-600">overflow-scroll</div>
              <div className="mb-2 text-blue-600">overflow-x-auto</div>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="mb-2">overflow: auto;</div>
              <div className="mb-2">overflow: hidden;</div>
              <div className="mb-2">overflow: clip;</div>
              <div className="mb-2">overflow: visible;</div>
              <div className="mb-2">overflow: scroll;</div>
              <div className="mb-2">overflow-x: auto;</div>
            </div>
          </div>
        </div>

        <h2 id="basic-usage" className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-12 mb-4">
          Basic usage
        </h2>

        <h3 id="showing-content-that-overflows" className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-4">
          Showing content that overflows
        </h3>
        <p className="leading-7 mb-4">
          Lorem ipsum dolor sit amet consectetur. Quam senectus mauris donec sed. In habitasse mattis vestibulum suscipit auctor neque. Sit et ipsum viverra non. Lorem non cras sollicitudin a lacus diam. Dolor amet mi posuere magna.
        </p>

        <h3 id="hiding-content-that-overflows" className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-4">
          Hiding content that overflows
        </h3>
        <p className="leading-7 mb-4">
          Nunc vulputate pharetra convallis sed ipsum cum gravida mattis at. Sit id in a mattis incididunt est lacoreet. Tempus odio tempor vestibulum morbi. Ridiculus egestas lectus cursus odio nunc eget risus id. Sit velit magnis erat volutpat tortor a. Ullamcorper et orci nunc quis tempor mi nunc. Tortor eget adipiscing quis id id enim. Ut risus aenean at hendrerit.
        </p>

        <CodeBlock language="html" showLineNumbers>
{`<div class="overflow-visible ...">
  <!-- Content that exceeds width or height will be visible outside the element -->
</div>`}
        </CodeBlock>

        <h3 id="scroll-vertically-if-needed" className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-4">
          Scroll vertically if needed
        </h3>
        <p className="leading-7 mb-4">
          Use overflow-y-auto to allow vertical scrolling if needed.
        </p>

        <h3 id="scroll-vertically-always" className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-4">
          Scroll vertically always
        </h3>
        <p className="leading-7 mb-4">
          Use overflow-y-scroll to always show a vertical scrollbar.
        </p>

        <h3 id="scroll-in-all-directions" className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-4">
          Scroll in all directions
        </h3>
        <p className="leading-7 mb-4">
          Use overflow-scroll to add scrollbars in both directions.
        </p>

        <h3 id="breakpoint-tips" className="scroll-m-20 text-xl font-semibold tracking-tight mt-8 mb-4">
          Breakpoint tips
        </h3>
        <p className="leading-7 mb-4">
          You can also apply these utilities at specific breakpoints.
        </p>

        <div className="rounded-md border mt-8 p-4 bg-muted/50">
          <p className="text-sm font-medium">Want to dig deeper into Overflow?</p>
          <p className="text-sm mt-1">
            Read the{" "}
            <a href="#" className="link">official MDN documentation</a>
            {" "}for overflow.
          </p>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Index;
