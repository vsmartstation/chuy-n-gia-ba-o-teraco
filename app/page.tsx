export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">
          Welcome to Chuyên Gia Bảo Teraco
        </h1>
        <p className="text-xl text-white mb-8">
          Next.js App Router Homepage - Đã khởi động thành công! 🚀
        </p>
        <div className="space-y-4">
          <p className="text-lg text-white/90">
            ✅ App directory structure created
          </p>
          <p className="text-lg text-white/90">
            ✅ TypeScript enabled
          </p>
          <p className="text-lg text-white/90">
            ✅ Tailwind CSS configured
          </p>
          <p className="text-lg text-white/90">
            ✅ Production deployment ready
          </p>
        </div>
      </div>
    </div>
  );
}
