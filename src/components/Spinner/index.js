import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Spinner = ({ isLoading }) => {
  if (!isLoading) return;
  return (
    <div className="w-full text-center my-5">
      <FontAwesomeIcon className="animate-spin text-5xl text-neutral-600" icon={faSpinner} />
    </div>
  );
}

export { Spinner };