import { motion } from "motion/react";
import { CarDiagram } from "./CarDiagram";

/**
 * 팜플렛 표지: 한 장에 컨셉 전달
 */
export function Slide1() {
  return (
    <div className="min-h-[100dvh] min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col items-center justify-center pt-8 sm:pt-16 pb-16 sm:pb-28 px-2 sm:pl-6 sm:pr-16 md:pl-10 md:pr-[4.5rem] bg-white">
      <div className="max-w-5xl w-full min-w-0 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-2 sm:mb-6"
        >
          <p className="text-blue-600/80 text-xs font-bold tracking-widest uppercase mb-2">
            01 · 표지
          </p>
          <p className="text-slate-500 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2">
            Data Integration Platform
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-2 break-words">
            데이터 통합 플랫폼
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 break-words">
            여러 방향이 한 흐름으로, 그리고 자율주행
          </p>
          <p className="text-sm sm:text-base text-slate-500 mt-1 break-words">
            자율주행 데이터 처리 및 통합 기술
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="w-full min-w-0 rounded-xl sm:rounded-2xl bg-transparent overflow-hidden"
        >
          <CarDiagram />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-2 sm:mt-6 text-slate-500 text-xs sm:text-sm text-center max-w-md"
        >
          키보드 화살표 또는 하단 버튼으로 넘기세요
        </motion.p>
      </div>
    </div>
  );
}
