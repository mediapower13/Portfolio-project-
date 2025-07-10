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
└── mediapower.jpg         # Personal/Company branding image
```

## Image Guidelines

### Certificates
- **Format**: JPG or PNG
- **Resolution**: Minimum 1200x800px for optimal quality
- **File Size**: Keep under 2MB for faster loading
- **Naming**: Use kebab-case (lowercase with hyphens)

### Logos
- **Format**: SVG preferred, PNG as fallback
- **Background**: Transparent preferred
- **Resolution**: Vector (SVG) or high-res PNG (512x512px minimum)

### Personal Images
- **Format**: JPG for photos, PNG for graphics
- **Resolution**: Optimized for web (1920px max width)
- **Compression**: Balanced quality/file size

## How to Add New Images

1. **Certificates**: Add to `certificates/` folder
2. **Logos**: Add to `logos/` folder
3. **Personal/Branding**: Add to root `images/` folder
4. **Update Code**: Reference using `/images/[folder]/filename.ext`

## Current Certificate Mapping

| Certificate | File Name | Status |
|-------------|-----------|---------|
| Huawei HCIA-Datacom | `huawei-datacom-certificate.jpg` | ✅ Ready |
| JavaScript Crash Course | `javascript-crash-course.jpg` | ✅ Ready |
| Microsoft Excel | `microsoft-excel.jpg` | ✅ Ready |
| Full Stack Course | `fullstack-crash-course.jpg` | ✅ Ready |

## Notes

- Replace placeholder files with actual certificate images
- Ensure all images are optimized for web
- Maintain consistent naming conventions
- Update this README when adding new images
