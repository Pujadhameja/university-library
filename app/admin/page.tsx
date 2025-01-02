import StatCard from "@/components/admin/StatCard";

const Page = () => {
  return (
    <>
      <section className="flex flex-wrap min-w-fit gap-4">
        <StatCard
          label="Borrowed Books"
          count={125}
          changeAmount={2}
          isStatIncrease={false}
        />
        <StatCard
          label="Total Users"
          count={317}
          changeAmount={4}
          isStatIncrease
        />
        <StatCard
          label="Total Books"
          count={163}
          changeAmount={2}
          isStatIncrease
        />
      </section>

      <div>
        <div>
          <section>Borrow Requests</section>
          <section>Account Requests</section>
        </div>

        <section>Recently Added Books</section>
      </div>
    </>
  );
};

export default Page;
