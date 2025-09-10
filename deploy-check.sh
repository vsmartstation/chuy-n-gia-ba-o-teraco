#!/bin/bash

# Deploy Check Script for Vercel Deployment
# This script helps verify everything is ready for deployment

echo "🚀 Starting deployment check..."
echo "================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check Node.js version
echo "📋 Checking Node.js version..."
node_version=$(node -v)
echo "✅ Node.js version: $node_version"

# Check npm version
echo "📋 Checking npm version..."
npm_version=$(npm -v)
echo "✅ npm version: $npm_version"

# Check if dependencies are installed
echo "📋 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules not found. Installing dependencies..."
    npm install
fi

# Run lint check
echo "📋 Running lint check..."
npm run lint
if [ $? -eq 0 ]; then
    echo "✅ Lint check passed"
else
    echo "❌ Lint check failed. Please fix linting errors before deploying."
    exit 1
fi

# Run build check
echo "📋 Running build check..."
npm run build
if [ $? -eq 0 ]; then
    echo "✅ Build check passed"
else
    echo "❌ Build check failed. Please fix build errors before deploying."
    exit 1
fi

# Check if required files exist
echo "📋 Checking required files..."
required_files=("src/app/page.tsx" "src/app/layout.tsx" "src/app/api/chatbot/route.ts" "package.json" "next.config.ts" "vercel.json")

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file is missing"
        exit 1
    fi
done

# Check environment variables
echo "📋 Checking environment setup..."
if [ -z "$ZAI_API_KEY" ]; then
    echo "⚠️  ZAI_API_KEY environment variable not set locally"
    echo "   Make sure to set it in Vercel dashboard after deployment"
else
    echo "✅ ZAI_API_KEY is set locally"
fi

echo "================================"
echo "🎉 All checks passed! Your project is ready for deployment to Vercel."
echo ""
echo "Next steps:"
echo "1. Commit your changes: git add . && git commit -m 'Ready for Vercel deployment'"
echo "2. Push to GitHub: git push origin main"
echo "3. Deploy to Vercel:"
echo "   - Go to vercel.com"
echo "   - Import your GitHub repository"
echo "   - Add ZAI_API_KEY environment variable"
echo "   - Click Deploy"
echo ""
echo "🚀 Good luck with your deployment!"