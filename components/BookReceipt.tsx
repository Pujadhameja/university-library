"use client";

import { jsPDF as JsPDF } from "jspdf";
import dayjs from "dayjs";
import Image from "next/image";
import html2canvas from "html2canvas";

import { Button } from "./ui/button";

const BookReceipt = ({
  borrow: { id, borrowDate, dueDate },
  title,
  author,
  category,
}: BorrowedBook) => {
  const formattedDueDate = dayjs(dueDate).format("MMM DD, YYYY");
  const formattedBorrowDate = dayjs(borrowDate).format("MMM DD, YYYY");

  const daysLeft = dayjs(dueDate).diff(dayjs(), "day");
  const totalDays = dayjs(dueDate).diff(dayjs(borrowDate), "day");

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();

    const ticket = document.getElementById("book-ticket");
    if (ticket) {
      // Temporarily make the section visible off-screen
      ticket.style.position = "absolute";
      ticket.style.left = "-9999px";
      ticket.style.display = "block";

      // Capture the section as a canvas
      const canvas = await html2canvas(ticket, {
        scale: 2,
        backgroundColor: "#000000",
      });

      // Convert canvas to PDF
      const imgData = canvas.toDataURL("image/png");
      const pdf = new JsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

      // Save the PDF
      pdf.save("BookWise_Ticket.pdf");

      // Re-hide the section
      ticket.style.display = "none";
      ticket.style.position = "";
      ticket.style.left = "";
    }
  };

  return (
    <>
      <div className="mt-7 w-full px-4">
        <div className="book-loaned">
          <Image
            src="/icons/calendar.svg"
            alt="calendar"
            width={18}
            height={18}
            className="object-contain"
          />

          <p className="text-light-100" onClick={handleDownload}>
            {daysLeft} days left to due
          </p>
        </div>

        <Button className="book-btn" onClick={handleDownload}>
          Download receipt
        </Button>
      </div>

      <section
        id="book-ticket"
        className="relative mt-10 hidden w-[544px] overflow-hidden  bg-dark-300 py-8"
      >
        <div className="flex items-center gap-2 px-8">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={40}
            height={32}
            className="object-contain"
          />
          <p className="text-2xl font-semibold text-white">BookWise</p>
        </div>

        <div className="mt-9 px-8">
          <h3 className="text-2xl font-bold text-white">Borrow Receipt</h3>

          <p className="mt-3 text-base text-light-700">
            Receipt ID: <span className="font-bold text-light-200">#{id}</span>
          </p>
          <p className="mt-1 text-base text-light-700">
            Date Issued:{" "}
            <span className="font-bold text-light-200">
              {formattedBorrowDate}
            </span>
          </p>
        </div>

        <div className="my-10 h-px w-full border-dotted bg-light-100/10" />

        <div className="px-8">
          <h4 className="text-lg font-bold text-white">Book Details</h4>

          <div className="mt-5 grid grid-cols-2 gap-5">
            <div className="space-y-1 rounded-md border border-light-100/10 p-3">
              <p className="text-xs text-light-700">Title</p>
              <p className="text-sm font-bold text-white">{title}</p>
            </div>

            <div className="space-y-1 rounded-md border border-light-100/10 p-3">
              <p className="text-xs text-light-700">Author</p>
              <p className="text-sm font-bold text-white">{author}</p>
            </div>

            <div className="space-y-1 rounded-md border border-light-100/10 p-3">
              <p className="text-xs text-light-700">Category</p>
              <p className="text-sm font-bold text-white">{category}</p>
            </div>

            <div className="space-y-1 rounded-md border border-light-100/10 p-3">
              <p className="text-xs text-light-700">Borrowed on</p>
              <p className="text-sm font-bold text-white">
                {formattedBorrowDate}
              </p>
            </div>

            <div className="space-y-1 rounded-md border border-light-100/10 p-3">
              <p className="text-xs text-light-700">Due Date</p>
              <p className="text-sm font-bold text-white">{formattedDueDate}</p>
            </div>

            <div className="space-y-1 rounded-md border border-light-100/10 p-3">
              <p className="text-xs text-light-700">Duration</p>
              <p className="text-sm font-bold text-white">{totalDays} days</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-3.5 top-1/2 size-7 -translate-y-1/2 rounded-full bg-black" />
          <div className="my-10 h-px w-full bg-light-100/10 " />

          <div className="absolute -right-3.5 top-1/2 size-7 -translate-y-1/2 rounded-full bg-black" />
        </div>

        <div className="px-8">
          <h4 className="text-lg font-bold text-white">Terms</h4>
          <ul className="mt-2 list-disc pl-5">
            <li className="text-base text-light-700">
              Please return the book by the due date.
            </li>
            <li className="text-base text-light-700">
              Lost or damaged books may incur replacement costs.
            </li>
          </ul>
        </div>

        <div className="my-10 h-px w-full bg-light-100/10" />

        <div className="px-8 text-center text-light-700">
          <p>
            Thank you for using{" "}
            <span className="font-semibold text-light-200">BookWise</span> . For
            any questions or concerns, please contact us at{" "}
            <span className="font-semibold text-light-200">
              support@bookwise.com
            </span>
          </p>
        </div>

        <div className="absolute inset-x-0 -bottom-6 flex flex-row gap-1.5">
          {[...Array(17)].map((_, index) => (
            <div key={index} className="size-7 rounded-full bg-black" />
          ))}
        </div>
      </section>
    </>
  );
};

export default BookReceipt;
