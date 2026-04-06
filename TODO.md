# Fix Google Auth Deployment Issue - TODO

## Plan Overview
Fix \"Access blocked: Authorization Error\" for production deploys (Vercel client, Render server)

## Production URLs
- Client: https://ai-resume-builder-iota-plum.vercel.app
- Server: https://ai-resume-builder-3-jelr.onrender.com

## Steps:
- [x] Step 1: Update client/src/services/api.js → Set BASE_URL to https://ai-resume-builder-3-jelr.onrender.com/api ✓
- [x] Step 2: Update server/src/app.js → Confirmed https://ai-resume-builder-iota-plum.vercel.app already in allowedOrigins (no change needed)
- [ ] Step 3: Update Google Cloud Console → Add Vercel URL to Authorized JavaScript origins
- [ ] Step 4: Redeploy client (Vercel) & server (Render)
- [ ] Step 5: Test Google login
- [ ] Complete
