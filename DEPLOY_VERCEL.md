# Hướng dẫn Deploy Website lên Vercel

## 🚀 Chuẩn bị trước khi deploy

### 1. Kiểm tra điều kiện tiên quyết
- ✅ Node.js 18+ đã được cài đặt
- ✅ Git đã được cài đặt
- ✅ Tài khoản GitHub đã có
- ✅ Tài khoản Vercel đã có

### 2. Cấu hình project cho Vercel

Project hiện tại đã sẵn sàng để deploy lên Vercel với:
- Next.js 15.3.5
- TypeScript
- Tailwind CSS 4
- shadcn/ui components

## 📋 Các bước deploy

### Bước 1: Commit code lên GitHub

1. **Kiểm tra git status**
```bash
git status
```

2. **Add tất cả file**
```bash
git add .
```

3. **Commit changes**
```bash
git commit -m "feat: Update website - Chuyên gia Bảo tư vấn Terraco"
```

4. **Push lên GitHub**
```bash
git push origin main
```

### Bước 2: Deploy lên Vercel

#### Cách 1: Deploy qua GitHub (Khuyến khích)

1. **Login vào Vercel**
   - Truy cập [vercel.com](https://vercel.com)
   - Login bằng tài khoản GitHub

2. **Import Project**
   - Click "New Project"
   - Chọn repository GitHub của bạn
   - Click "Import"

3. **Cấu hình Environment Variables**
   Trong phần "Environment Variables", thêm các biến sau:
   
   ```env
   # Z-AI API Key cho chatbot
   ZAI_API_KEY=AQ.Ab8RN6Lg2mlDvjjNIqqJZaBnZBe-7VhPOP0aO51Apx9c0BvVDw
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel sẽ tự động build và deploy project

#### Cách 2: Deploy qua Vercel CLI

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login vào Vercel**
```bash
vercel login
```

3. **Deploy project**
```bash
vercel
```

4. **Thêm Environment Variables**
```bash
vercel env add ZAI_API_KEY
```

### Bước 3: Cấu hình Domain (Tùy chọn)

1. **Custom Domain**
   - Trong dashboard Vercel, chọn project
   - Click "Settings" → "Domains"
   - Add custom domain của bạn

2. **DNS Configuration**
   - Theo hướng dẫn của Vercel để cấu hình DNS

## ⚙️ Cấu hình Vercel (Tùy chọn)

### Tạo file vercel.json

Tạo file `vercel.json` ở root directory:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "env": {
    "ZAI_API_KEY": "AQ.Ab8RN6Lg2mlDvjjNIqqJZaBnZBe-7VhPOP0aO51Apx9c0BvVDw"
  },
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install"
}
```

### Cấu hình Next.js cho Vercel

Update file `next.config.ts`:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Set to false for production
  },
  reactStrictMode: true, // Enable for production
  eslint: {
    ignoreDuringBuilds: false, // Set to false for production
  },
  // Optimize for Vercel
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
```

## 🧪 Kiểm tra sau khi deploy

### 1. Kiểm tra functionality
- ✅ Website load chính xác
- ✅ Chatbot hoạt động tốt
- ✅ All navigation links work
- ✅ Images load properly
- ✅ Responsive design works on mobile

### 2. Kiểm tra performance
- Truy cập [Vercel Analytics](https://vercel.com/analytics)
- Kiểm tra load time và performance scores

### 3. Kiểm tra errors
- Xem [Vercel Logs](https://vercel.com/logs)
- Kiểm tra console errors

## 🔧 Troubleshooting

### Common Issues

#### 1. Build Error
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install
```

#### 2. TypeScript Errors
```bash
# Build locally first
npm run build
```

#### 3. Environment Variables
- Đảm bảo tất cả environment variables được set đúng
- Kiểm tra trong Vercel dashboard

#### 4. Chatbot không hoạt động
- Kiểm tra ZAI_API_KEY environment variable
- Kiểm tra API endpoint `/api/chatbot`

### Debug Commands

```bash
# Build locally
npm run build

# Start production locally
npm start

# Check types
npm run lint
```

## 📝 Notes quan trọng

### Security
- 🔒 Never commit API keys to repository
- 🔒 Use environment variables cho sensitive data
- 🔒 Regularly rotate API keys

### Performance
- 📈 Monitor performance regularly
- 📈 Use Vercel Analytics
- 📈 Optimize images and assets

### Maintenance
- 🔄 Keep dependencies updated
- 🔄 Monitor for security updates
- 🔄 Regular backups

## 🎉 Sau khi deploy thành công

1. **Share website** với khách hàng
2. **Monitor performance** thường xuyên
3. **Update content** khi cần
4. **Backup regularly**

---

## 📞 Support

Nếu gặp vấn đề trong quá trình deploy:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Check [Next.js Documentation](https://nextjs.org/docs)
3. Contact support nếu cần

Good luck với việc deploy website của chuyên gia Bảo! 🚀