

const ItemPagesHeader = ({title,desc}) => {
  return (
    <header className="w-full text-center bg-peach text-white col-start-1 col-end-13 flex flex-col justify-center items-center px-6 py-24 gap-6 sm:col-start-2 sm:col-end-12 sm:rounded-2xl">
      <h2 className="text-head1Mob leading-9 font-medium xsm:text-5xl xsm:leading-head1">
        {title}
      </h2>
      <p className="text-bodyMob font-light leading-bodyMob max-w-sm xsm:text-base xsm:leading-head3">
        {desc}
      </p>
    </header>
  );
};

export default ItemPagesHeader