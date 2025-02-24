export function FooterCopyright() {
  return (
    <div className="flex w-full justify-center pb-1">
      <div className="flex text-xs">© 2025 Copy en Printshop 't Hartje</div>
      <div className="text-xs text-gray-400">
        &nbsp;|&nbsp;Built by&nbsp;
        <a
          className="cursor-pointer"
          href="https://www.robverplankejr.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rob Verplanke
        </a>
      </div>
    </div>
  );
}
