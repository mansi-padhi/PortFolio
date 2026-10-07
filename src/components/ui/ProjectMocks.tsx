import type { CSSProperties } from "react";

/*
 * Grayscale, illustrative-only interfaces. They are not screenshots and contain
 * no data — just the module names and flows described on the résumé.
 */

function WindowBar({ title }: { title: string }) {
  return (
    <div className="flex h-9 shrink-0 items-center gap-3 border-b border-line px-3.5">
      <span className="flex gap-1.5" aria-hidden>
        <i className="h-2 w-2 rounded-full bg-soft" />
        <i className="h-2 w-2 rounded-full bg-soft" />
        <i className="h-2 w-2 rounded-full bg-soft" />
      </span>
      <span className="text-faint">{title}</span>
    </div>
  );
}

const MODULES = ["Reservations", "Guest profiles", "Rooms", "Housekeeping", "Maintenance", "Billing"];
const ROOM_STATES = [0, 1, 1, 2, 0, 1, 0, 0, 2, 1, 1, 0, 1, 0, 2, 1];
const EVENTS = ["WhatsApp", "Gmail", "Slack", "Sheets"];

export function HotelMock() {
  return (
    <div className="mock" role="img" aria-label="Illustrative interface of the Hotelator OS dashboard: six module navigation, a room status grid, and a booking event fanning out to WhatsApp, Gmail, Slack and Google Sheets.">
      <div className="mock-win" aria-hidden>
        <WindowBar title="hotelator-os / dashboard" />
        <div className="flex min-h-0 flex-1">
          {/* sidebar */}
          <div className="hidden w-[30%] shrink-0 flex-col gap-1 border-r border-line p-2.5 sm:flex">
            {MODULES.map((m, i) => (
              <div
                key={m}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${i === 0 ? "bg-ink text-paper" : ""}`}
              >
                <i className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-paper" : "bg-faint"}`} />
                {m}
              </div>
            ))}
          </div>

          {/* main */}
          <div className="flex min-w-0 flex-1 flex-col gap-3 p-3">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-line p-2.5">
                  <div className="mock-bar w-1/2" />
                  <div className="mock-bar dark mt-2.5 h-[11px] w-3/4" />
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-line p-2.5">
              <div className="mb-2 flex items-center justify-between">
                <span>Rooms</span>
                <span className="flex gap-2 text-faint">
                  <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-sm bg-soft" />free</span>
                  <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-sm bg-ink-2" />occupied</span>
                  <span className="flex items-center gap-1"><i className="h-1.5 w-1.5 rounded-sm border border-ink-2" />cleaning</span>
                </span>
              </div>
              <div className="grid grid-cols-8 gap-1.5">
                {ROOM_STATES.map((s, i) => (
                  <i
                    key={i}
                    className={`aspect-square rounded-[4px] ${s === 0 ? "bg-soft" : s === 1 ? "bg-ink-2" : "border border-ink-2"}`}
                  />
                ))}
              </div>
            </div>

            {/* automation */}
            <div className="mt-auto rounded-lg border border-line p-2.5">
              <div className="mb-2 flex items-center justify-between">
                <span>Automation · viaSocket Embed</span>
                <span className="text-faint">on booking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="shrink-0 rounded-md bg-ink px-2 py-1.5 text-paper">Booking event</div>
                <div className="relative h-px flex-1 bg-line">
                  {[0, 0.9, 1.8].map((d) => (
                    <i
                      key={d}
                      className="flow-dot absolute -top-[2px] left-0 h-[5px] w-[5px] rounded-full bg-ink"
                      style={{ "--d": `${d}s` } as CSSProperties}
                    />
                  ))}
                </div>
                <div className="grid shrink-0 grid-cols-2 gap-1">
                  {EVENTS.map((e) => (
                    <span key={e} className="rounded-md border border-line px-1.5 py-1 text-center">
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="mock-label">Illustrative UI</span>
    </div>
  );
}

const MESSAGES: { side: "l" | "r"; w: string; bot?: boolean }[] = [
  { side: "l", w: "62%" },
  { side: "r", w: "48%" },
  { side: "l", w: "70%", bot: true },
  { side: "r", w: "38%" },
];

export function WellnessMock() {
  return (
    <div className="mock" role="img" aria-label="Illustrative interface of the Mental Wellness App: a list of peer discussion rooms, a real-time chat thread, and an AI chatbot reply.">
      <div className="mock-win" aria-hidden>
        <WindowBar title="wellness / chat-rooms" />
        <div className="flex min-h-0 flex-1">
          <div className="hidden w-[30%] shrink-0 flex-col gap-1.5 border-r border-line p-2.5 sm:flex">
            <span className="mb-1 text-faint">Rooms</span>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`flex items-center gap-2 rounded-md px-2 py-2 ${i === 0 ? "bg-soft" : ""}`}>
                <i className="h-5 w-5 shrink-0 rounded-full border border-line bg-paper" />
                <div className="min-w-0 flex-1">
                  <div className="mock-bar w-4/5" />
                  <div className="mock-bar mt-1.5 h-[5px] w-1/2" />
                </div>
              </div>
            ))}
            <div className="mt-auto flex items-center gap-2 rounded-md border border-line px-2 py-2">
              <i className="h-5 w-5 shrink-0 rounded-full bg-ink" />
              <span>AI chatbot</span>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-line px-3 py-2">
              <span>Peer discussion</span>
              <span className="flex items-center gap-1.5 text-faint">
                <i className="live-dot !h-[5px] !w-[5px]" /> live · WebSocket
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-end gap-2.5 p-3">
              {MESSAGES.map((m, i) => (
                <div key={i} className={`flex items-end gap-2 ${m.side === "r" ? "flex-row-reverse" : ""}`}>
                  <i className={`h-5 w-5 shrink-0 rounded-full ${m.bot ? "bg-ink" : "border border-line bg-soft"}`} />
                  <div
                    className={`rounded-xl px-3 py-2.5 ${m.side === "r" ? "bg-ink-2" : "border border-line bg-white"}`}
                    style={{ width: m.w }}
                  >
                    {m.bot && <span className="mb-1.5 block text-faint">AI assistant</span>}
                    <div className={`mock-bar ${m.side === "r" ? "!bg-[#5a5a5a]" : ""}`} />
                    <div className={`mock-bar mt-1.5 w-2/3 ${m.side === "r" ? "!bg-[#5a5a5a]" : ""}`} />
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <i className="h-5 w-5 shrink-0 rounded-full bg-ink" />
                <div className="typing rounded-xl border border-line bg-white px-3 py-2">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 border-t border-line p-2.5">
              <div className="flex h-7 flex-1 items-center rounded-full border border-line px-3">
                <div className="mock-bar w-1/3" />
              </div>
              <i className="grid h-7 w-7 place-items-center rounded-full bg-ink text-paper">↑</i>
            </div>
          </div>
        </div>
      </div>
      <span className="mock-label">Illustrative UI</span>
    </div>
  );
}
