# Quick Deploy Guide - Vercel

## 🚀 Deploy in 5 Minutes

### Prerequisites
- ✅ GitHub account
- ✅ Vercel account
- ✅ Project code ready

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Import"

### Step 3: Add Environment Variable
In Vercel dashboard → Settings → Environment Variables:
```
ZAI_API_KEY = AQ.Ab8RN6Lg2mlDvjjNIqqJZaBnZBe-7VhPOP0aO51Apx9c0BvVDw
```

### Step 4: Deploy
Click "Deploy" button

### Step 5: Access Your Site
Wait for deployment to complete, then access your site at:
`https://your-project-name.vercel.app`

## 📱 Post-Deploy Checklist

- [ ] Website loads correctly
- [ ] Chatbot works (test with a question)
- [ ] Mobile responsive
- [ ] All images load
- [ ] Contact info displays correctly

## 🔧 If Something Goes Wrong

### Build Errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Chatbot Not Working
- Check ZAI_API_KEY in Vercel environment variables
- Check browser console for errors

### Need Help?
- Check `DEPLOY_VERCEL.md` for detailed guide
- Check Vercel logs
- Contact support

---

🎉 **Your website will be live in minutes!**