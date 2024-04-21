import { MenuItem } from "./_components/MenuItem";
export default function Home() {
  const MIN_DIST_FROM_TOP = 200;
  const START_DIST_FROM_TOP = 400;

  return (
    <div
      className="grid px-2"
      style={{
        gridTemplateRows: `${MIN_DIST_FROM_TOP}px 1fr`,
      }}
    >
      <div className="bg-background sticky top-0 z-20 pt-4">
        <h1 className="font-bold text-3xl">Viskum App</h1>
        <p>En app for hele viskum-familien</p>
      </div>

      <div
        style={{
          paddingTop: Math.max(0, START_DIST_FROM_TOP - MIN_DIST_FROM_TOP),
        }}
      >
        <div
          className="bg-background sticky z-50"
          style={{
            top: MIN_DIST_FROM_TOP,
          }}
        >
          <p className="text-sm view-transition" no-view-transition>
            Aktiviteter
          </p>
        </div>
        <div
          className="sticky pb-8"
          style={{
            top: MIN_DIST_FROM_TOP,
            minHeight: `calc(100svh - ${MIN_DIST_FROM_TOP}px - 32px)`,
          }}
        >
          <MenuItem
            title="Prøveforberedelse"
            subtitle="Forbered dig til dine prøver"
            href="/test-preparation"
          />
        </div>
      </div>
      <div className="bg-background fixed bottom-0 left-0 w-screen h-8 z-50"></div>
    </div>
  );
}
