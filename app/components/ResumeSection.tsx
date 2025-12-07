
import Image from "next/image"
import resumePreview from "@/public/assets/resume-preview.png"

export const ResumeSection = () => {
    return (
        <section className="relative w-full py-20 bg-white">
            <div className="custom:mx-auto xxs:mx-3.5 mx-3.5 max-w-6xl md:mx-5 lg:mx-8">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        My Resume
                    </h2>

                    <div className="relative w-full max-w-4xl shadow-2xl border border-gray-200 rounded-lg overflow-hidden">
                        <Image
                            src={resumePreview}
                            alt="Ritul Shekhar Resume"
                            className="w-full h-auto object-contain"
                            placeholder="blur"
                        />
                    </div>

                    <div className="mt-8 text-center bg-gray-50 px-8 py-6 rounded-2xl border border-gray-100 w-full max-w-2xl">
                        <p className="text-gray-600 font-medium text-lg">
                            Have any messages? Send to{" "}
                            <a href="mailto:ritulshekhar@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                                ritulshekhar@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
