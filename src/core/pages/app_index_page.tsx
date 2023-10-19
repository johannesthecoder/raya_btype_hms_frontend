import {
  IoBedOutline,
  IoRestaurantOutline,
  IoStorefrontOutline,
  IoNewspaperOutline,
} from "react-icons/io5";
import { LinkWithIcon } from "../components/link_with_icon";

export function AppIndexPage(): JSX.Element {
  return (
    <div className="h-full w-full flex justify-center items-center text-neutral">
      <div className="w-96 h-96 grid grid-cols-2 gap-6">
        <LinkWithIcon url="accommodation" icon={<IoBedOutline className="text-8xl" />}>
          Front Office
        </LinkWithIcon>
        <LinkWithIcon url="restaurant" icon={<IoRestaurantOutline className="text-8xl" />}>
          Restaurant
        </LinkWithIcon>
        <LinkWithIcon url="inventory" icon={<IoStorefrontOutline className="text-8xl" />}>
          Inventory
        </LinkWithIcon>
        <LinkWithIcon url="report" icon={<IoNewspaperOutline className="text-8xl" />}>
          Report
        </LinkWithIcon>
      </div>
    </div>
  );
}
