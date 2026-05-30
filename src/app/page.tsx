import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// SEO 메타데이터 설정
export const metadata: Metadata = {
  title: "Dev Project 01 - 프리미엄 Next.js 템플릿",
  description: "Next.js 16, Tailwind CSS v4, 그리고 shadcn/ui로 구축된 혁신적인 웹 애플리케이션 스타터 킷입니다.",
};

// 메인 랜딩 페이지 컴포넌트 (Arrow Function 스타일 적용)
const Home = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zinc-950 font-sans text-zinc-50">
      {/* 배경 장식 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-800/30 via-zinc-950 to-zinc-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />

      <main className="relative z-10 flex flex-col items-center justify-center px-6 py-20 text-center max-w-4xl">
        {/* Next.js 로고 영역 */}
        <div className="mb-10 flex items-center justify-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/50 px-5 py-2 backdrop-blur-md">
          <Image
            className="invert"
            src="/next.svg"
            alt="Next.js 로고"
            width={72}
            height={15}
            priority
          />
          <span className="h-4 w-px bg-zinc-800" />
          <span className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">v16 Enabled</span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
          미래를 그리는 웹 개발<br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Next.js & shadcn/ui</span>
        </h1>

        {/* 상세 설명 */}
        <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          TypeScript의 엄격한 타입 안정성과 Tailwind CSS v4의 차세대 스타일링 파워를 결합하여
          가장 빠르고 아름다운 최첨단 사용자 인터페이스를 디자인하세요.
        </p>

        {/* CTA 버튼 영역 */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Link
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full sm:w-auto h-12 rounded-xl px-8 font-semibold bg-white text-zinc-950 hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.02] flex items-center justify-center"
            )}
          >
            공식 문서 탐색
          </Link>
          <Link
            href="https://github.com/shadcn/ui"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto h-12 rounded-xl px-8 font-semibold border-zinc-800 text-zinc-300 hover:bg-zinc-900/50 backdrop-blur-sm transition-all hover:scale-[1.02] flex items-center justify-center"
            )}
          >
            GitHub 저장소
          </Link>
        </div>

        {/* 하단 기술 스택 요약 배지 */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
          {[
            { label: "React 19", desc: "새로운 아키텍처" },
            { label: "Tailwind v4", desc: "고성능 컴파일" },
            { label: "TypeScript 5", desc: "강력한 정적 분석" },
            { label: "shadcn/ui", desc: "프리미엄 컴포넌트" },
          ].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-2xl border border-zinc-900 bg-zinc-950/60 backdrop-blur-sm shadow-inner"
            >
              <span className="text-sm font-bold text-zinc-200">{tech.label}</span>
              <span className="text-xs text-zinc-500 mt-1">{tech.desc}</span>
            </div>
          ))}
        </div>
      </main>

      {/* 푸터 영역 */}
      <footer className="absolute bottom-6 text-center text-xs text-zinc-600">
        © 2026 dev-project01. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;


