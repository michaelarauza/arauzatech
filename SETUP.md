# Putting arauzatech.com live (about 30 minutes)

Same setup as your trash can site: GitHub Pages hosting, Porkbun domain, all free.

## 1. Put the site on GitHub
- [ ] On github.com, create a new **public** repo named `arauzatech`
- [ ] Click **uploading an existing file** and drag in all 4 files from this folder: `index.html`, `Sample_Report.pdf`, `CNAME`, `SETUP.md` → **Commit changes**
- [ ] Repo **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → **Save**
- [ ] Same page → **Custom domain**: `arauzatech.com` → Save

## 2. Point the domain at GitHub (Porkbun)
Porkbun → **Domain Management** → arauzatech.com → **DNS**. Delete any default "parked" records, then add:

| Type | Host | Answer |
|---|---|---|
| A | *(blank)* | 185.199.108.153 |
| A | *(blank)* | 185.199.109.153 |
| A | *(blank)* | 185.199.110.153 |
| A | *(blank)* | 185.199.111.153 |
| CNAME | www | michaelarauza.github.io |

- [ ] Wait 10–60 minutes, then back in GitHub Pages settings tick **Enforce HTTPS** (it appears once the certificate is ready)

## 3. Business email
- [ ] Porkbun → arauzatech.com → **Email Forwarding** → forward `hello@arauzatech.com` to your Gmail
- [ ] Send yourself a test email to confirm it arrives

## 4. Turn on the booking form (free)
Until this step, the form opens the visitor's email app with their request filled in, so it already works.
- [ ] Sign up at **formspree.io** with your Gmail → **New form** → name it "Checkup requests"
- [ ] Copy the form ID (looks like `xkgwabcd`)
- [ ] In `index.html`, find `YOUR_FORM_ID` and replace it with your ID → commit
- [ ] Submit a test request from the live site and confirm it reaches your inbox

## 5. Finish
- [ ] Open arauzatech.com on your phone and click every button
- [ ] Scan the QR code on the flyer and confirm it opens the site
- [ ] Create a free **Google Business Profile** for Arauza Tech Security and add the website

## Editing later
Edit `index.html` directly on GitHub (pencil icon) → commit. Changes go live in about a minute.
