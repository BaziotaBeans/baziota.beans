export function ActionButtons() {
  return (
    <div className="flex items-center gap-2 mt-6 md:flex-row flex-col w-full md:w-auto">
      <a
        href="mailto:fabiobaziota@gmail.com"
        className="w-full md:w-auto relative flex items-center gap-1 bg-white hover:bg-neutral-600 px-9 py-2.5 border-4 border-neutral-500 text-base rounded-2xl font-semibold text-neutral-600 cursor-pointer overflow-hidden transition-all  hover:text-white group hover:transition-all duration-700 hover:duration-700"
      >
        <svg
          viewBox="0 0 24 24"
          className="absolute w-6 fill-white z-9 transition-all duration-700  -left-1/4 group-hover:left-4 group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>

        <span className="relative z-1 transition-all duration-700  -translate-x-3 group-hover:translate-x-3 font-bold">
          Let's talk
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-neutral-600 rounded-full opacity-0 transition-all duration-700  group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
        <svg
          viewBox="0 0 24 24"
          className="absolute w-6 fill-neutral-600 z-9 transition-all duration-700  right-4 group-hover:-right-1/4 group-hover:fill-[#212121]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </a>

      <a
        href="/CV - Fábio baziota.pdf"
        download="CV - Fábio baziota.pdf"
        className="relative w-full md:w-auto flex items-center gap-1 bg-black/55 px-9 py-2.5 border-4 border-green-950 text-base rounded-2xl font-semibold text-white cursor-pointer overflow-hidden transition-all hover:text-white hover:rounded-2xl group hover:transition-all duration-700 hover:duration-700"
      >
        <svg
          viewBox="0 0 24 24"
          className="absolute w-6 fill-white z-9 transition-all duration-700  -left-1/4 group-hover:left-4 group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C12.5523 2 13 2.44772 13 3V11.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L11 11.5858V3C11 2.44772 11.4477 2 12 2Z"></path>
          <path d="M4 14C4.55228 14 5 14.4477 5 15V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V15C3 14.4477 3.44772 14 4 14Z"></path>
        </svg>

        <span className="relative z-1 transition-all duration-700  -translate-x-3 group-hover:translate-x-3 font-bold">
          Download CV
        </span>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-700 rounded-full opacity-0 transition-all duration-700  group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
        <svg
          viewBox="0 0 24 24"
          className="absolute w-6 fill-white z-9 transition-all duration-700  right-4 group-hover:-right-1/4 group-hover:fill-[#212121]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C12.5523 2 13 2.44772 13 3V11.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L11 11.5858V3C11 2.44772 11.4477 2 12 2Z"></path>
          <path d="M4 14C4.55228 14 5 14.4477 5 15V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V15C3 14.4477 3.44772 14 4 14Z"></path>
        </svg>
      </a>
    </div>
  );
}
