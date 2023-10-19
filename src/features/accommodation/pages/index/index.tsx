import { roomsWithGuests } from "../../../../assets/dummy_data/rooms_with_guests";

export const AccommodationIndexPage = (): JSX.Element => {
  return (
    <div className="w-full h-full flex gap-1 flex-col">
      <div className="h-24 shrink-0 border border-neutral-lighter bg-neutral-light rounded-lg"></div>
      <div className="w-full flex flex-col gap-3 overflow-auto">
        <div className="w-full h-24 px-1.5 py-1.5 flex gap-1 text-primary bg-primary-light  rounded-lg">
          <div className={` px-0.5 py-1.5 flex flex-col gap-1.5`}>
            <span className="font-bold">Room#</span>
            <span className="text-sm">Floor</span>
          </div>
          <div className={`w-20 px-0.5 py-1.5 flex flex-col gap-1.5`}>
            <span className="font-bold">Type</span>
            <span className="text-sm">PAX</span>
          </div>
          <div className={`grow w-40 px-0.5 py-1.5 flex flex-col gap-1.5`}>
            <span className="font-bold">Guest Name</span>
            <span className="text-sm">PAX & Source</span>
          </div>
          <div className={`grow w-36 px-0.5 py-1.5 flex flex-col gap-1.5`}>
            <span className="font-bold">Check-In</span>
            <span className="text-sm">Check-Out</span>
          </div>
          <div className={`w-24 px-0.5 py-1.5 flex flex-col gap-1.5`}>
            <span className="font-bold">Room Rate</span>
            <span className="text-sm">Meal Plan</span>
          </div>
          <div className={`w-28 px-0.5 py-1.5 flex flex-col gap-1.5`}>
            <span className="font-bold">Balance</span>
            <span className="text-sm">Bill To</span>
          </div>
          <div className={`grow w-24 px-0.5 py-1.5 flex flex-col gap-1.5`}>
            <span className="font-bold">Status</span>
            {/* <span className="text-sm">Icon</span> */}
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 overflow-auto">
          {roomsWithGuests.map((roomsWithGuest) => (
            <div
              key={`accommodation-index-hone-${roomsWithGuest.guestId}`}
              className="px-1.5 flex gap-1 border-b hover:bg-neutral-lighter"
            >
              <div className=" pt-3 px-0.5 flex flex-col">
                <span>#{roomsWithGuest.roomNumber}</span>
                <span className="text-sm text-neutral">{roomsWithGuest.roomFloor}</span>
              </div>
              <div className="w-20 pt-3 px-0.5 flex flex-col">
                <span>{roomsWithGuest.roomType}</span>
                <span className="text-sm text-neutral">{roomsWithGuest.pax}</span>
              </div>
              <div className="grow w-40 pt-3 px-0.5 flex flex-col">
                <span>{roomsWithGuest.guestName}</span>
                <span className="text-sm text-neutral">{roomsWithGuest.marketSource}</span>
              </div>
              <div className="grow w-36 pt-3 px-0.5 flex flex-col">
                <span>
                  {new Date(roomsWithGuest.checkIn).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })}
                </span>
                <span className="text-sm text-neutral">
                  {roomsWithGuest.checkOut == null
                    ? "unknown"
                    : new Date(roomsWithGuest.checkIn).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      })}
                  {/* {roomsWithGuest.checkOut ?? "unknown"} */}
                </span>
              </div>
              <div className="w-24 pt-3 px-0.5 flex flex-col">
                <span>
                  <span className="text-sm text-neutral-grey">ksh</span>
                  {roomsWithGuest.rate.toLocaleString()}
                </span>
                <span className="text-sm text-neutral">{roomsWithGuest.mealPlan}</span>
              </div>
              <div className="w-28 pt-3 px-0.5 flex flex-col">
                <span>
                  <span className="text-sm text-neutral-grey">ksh</span>
                  {roomsWithGuest.balance.toLocaleString()}
                </span>
                <span className="text-sm text-neutral overflow-clip text-clip">
                  {roomsWithGuest.billTo}
                </span>
              </div>
              <div className="grow w-24 pt-3 px-0.5 flex flex-col">
                <span>{roomsWithGuest.roomStatus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
