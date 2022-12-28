import { BaseComponentProps } from "../../models/BaseComponentProps";
import { NumberValidationDTO } from "../../models/NumberValidationDTO";
import NumberRow from "./NumberRow";
import useLocalState from "../../hooks/useLocalState";

interface NumberListingProp extends BaseComponentProps {}

function NumberListing(props: NumberListingProp) {
  const { data } = useLocalState<NumberValidationDTO[]>(
    "VALIDATED_NUMBERS",
    []
  );

  return (
    <section className="max-w-3xl mx-auto p-5 text-gray-600 sm:px-2">
      {data?.map((row) => (
        <NumberRow {...props} number={row} key={row.id} />
      ))}
    </section>
  );
}

export default NumberListing;
