import { DeleteRentalDocument } from '@@/pages/api/front/generated/graphql';
import { useMutation } from '@apollo/client';

export default function DeleteOrderButton(props: { deleteRental: (rentalId: number) => void; rental_id: number }) {
  const [deleteRentalFunc, { data, loading, error }] = useMutation(DeleteRentalDocument);
  const HandleDelete = async () => {
    await deleteRentalFunc({
      // DBから消す
      variables: {
        rentalId: props.rental_id,
      },
    });
    props.deleteRental(props.rental_id); // UIから消す
  };

  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error</p>;
  }

  return (
    <button className='btn btn-primary' onClick={() => HandleDelete()}>
      Delete
    </button>
  );
}
