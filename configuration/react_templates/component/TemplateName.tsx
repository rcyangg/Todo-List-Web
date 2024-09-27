interface TemplateNameProps {
  foo: string;
}

export const TemplateName = (props: TemplateNameProps) => {
  return (
      <div data-testid="TemplateName" data-value={props.foo}>
        TemplateName Component
      </div>
  );
};
