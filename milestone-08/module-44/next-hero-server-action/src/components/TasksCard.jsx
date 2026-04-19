// import { CircleDollar } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";

const TasksCard = ({task}) => {
    const {title, description, status, priority} = task;
  return (
    <Card className="max-w-[200px]">
      {/* <CircleDollar
        aria-label="Dollar sign icon"
        className="text-primary size-6"
        role="img"
      /> */}
      <Card.Header>
        <Card.Title className="font-bold text-black text-xl">{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link className="text-black"
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="/tasks"
          rel="noopener noreferrer"
          target="_blank"
        >
          {status}
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default TasksCard;
