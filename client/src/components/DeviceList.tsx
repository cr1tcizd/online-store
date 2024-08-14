import { useAppSelector } from "../hooks/redux";
import { DeviceItem } from "./DeviceItem";

export const DeviceList = () => {
  const { devices } = useAppSelector((state) => state.device);
  const { isDeviceLoading } = useAppSelector((state) => state.device);

  if (isDeviceLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-[28px] md:grid-cols-2 sm:flex sm: flex-col">
      {devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
};
