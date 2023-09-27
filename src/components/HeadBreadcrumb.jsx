import { Breadcrumb } from "antd";

const HeadBreadcrumb = ({ items }) => {

  
  return (
    <div className="mx-3">
      <Breadcrumb separator=">" items={items} className="m-auto pb-4 md:text-base text-sm" />
    </div>
  );
};

export default HeadBreadcrumb;
