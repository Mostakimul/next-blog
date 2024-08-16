import { ServiceType } from '@/types/service';

const ServiceCard = ({ service }: { service: ServiceType }) => {
  return (
    <div className="card w-full shadow-xl">
      <div className="flex pl-8 pt-8">
        <img src={service.serviceImage} alt="service" className="w-12 h-12" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>
        <p className="font-light">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
