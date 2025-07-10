# Images Directory Structure

This directory contains all the images used in the portfolio website.

## Directory Structure

```
images/
├── certificates/           # All certificate images
│   ├── huawei-datacom-certificate.jpg
│   ├── javascript-crash-course.jpg
│   ├── microsoft-excel.jpg
│   └── fullstack-crash-course.jpg
├── logos/                 # Company/Organization logos
├── mediapower.jpg         # Your profile/company image (REPLACE THIS!)
└── mediapower-placeholder.svg  # SVG fallback placeholder
```

## 🔥 IMPORTANT: Replace Your Profile Image

### Current Status: PLACEHOLDER ACTIVE
The `mediapower.jpg` file currently contains placeholder text. You MUST replace it with your actual image.

### Profile Image Requirements (`mediapower.jpg`)
- **Format**: JPG, PNG, or WebP
- **Dimensions**: 400x400px (square) for best results
- **Quality**: High resolution (at least 400x400px)
- **File Size**: Under 500KB for optimal loading
- **Content**: Your professional photo or Mediapower logo

### How to Replace:
1. Prepare your image (resize to 400x400px if needed)
2. Rename it to `mediapower.jpg`
3. Replace the existing placeholder file in this directory
4. The website will automatically display your image

## Certificate Images

### Requirements
- **Format**: JPG or PNG
- **Resolution**: Minimum 1200x800px for optimal quality
- **File Size**: Keep under 2MB for faster loading
- **Naming**: Use kebab-case (lowercase with hyphens)

### Current Certificate Mapping

| Certificate | File Name | Status |
|-------------|-----------|---------|
| Huawei HCIA-Datacom | `huawei-datacom-certificate.jpg` | 📝 Placeholder |
| JavaScript Crash Course | `javascript-crash-course.jpg` | 📝 Placeholder |
| Microsoft Excel | `microsoft-excel.jpg` | 📝 Placeholder |
| Full Stack Course | `fullstack-crash-course.jpg` | 📝 Placeholder |

## Design Features

### Profile Image Circle
- **Responsive Design**: Scales from 288px (mobile) to 320px (desktop)
- **Gradient Border**: Purple-to-blue gradient ring
- **Hover Effects**: Subtle scale and glow animations
- **Fallback Display**: Professional "MN Mediapower" text if image fails
- **Loading State**: Spinner animation while image loads

### Image Optimizations
- **Error Handling**: Graceful fallback to text display
- **Loading States**: Visual feedback during image load
- **Responsive Sizing**: Adapts to different screen sizes
- **Performance**: Optimized for web display

## Troubleshooting

### Image Not Displaying?
1. Check file name exactly matches `mediapower.jpg`
2. Ensure file is in `/public/images/` directory
3. Verify image file isn't corrupted
4. Check browser console for error messages

### Image Appears Blurry?
1. Use higher resolution source image
2. Ensure square aspect ratio (1:1)
3. Save with high quality settings

### Slow Loading?
1. Compress image file size
2. Use modern formats (WebP) if supported
3. Optimize image dimensions to 400x400px

## Next Steps
1. ✅ Replace `mediapower.jpg` with your actual image
2. ✅ Replace certificate placeholder files
3. ✅ Test image display on different devices
4. ✅ Optimize file sizes if needed
