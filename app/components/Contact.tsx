"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Copy, X, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
import { contactSection, contactInfo } from "../portfolioData";
import { socialIcons } from "./icons";

function MagneticButton({
  children,
  onClick,
  className,
  type = "button",
  title,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  title?: string;
  disabled?: boolean;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.3;
    const deltaY = (e.clientY - centerY) * 0.3;
    setPosition({ x: deltaX, y: deltaY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={disabled ? undefined : onClick}
      onMouseMove={disabled ? undefined : handleMouseMove}
      onMouseLeave={disabled ? undefined : handleMouseLeave}
      animate={disabled ? { x: 0, y: 0 } : { x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
      whileTap={disabled ? {} : { scale: 0.97 }}
      title={title}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}

function Toast({
  message,
  isVisible,
  onClose,
  type = "success",
}: {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type?: "success" | "error";
}) {
  const isError = type === "error";
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div className={`flex items-center gap-3 px-5 py-3 glass rounded-xl shadow-lg ${isError ? "border border-red-500/30 shadow-red-500/10" : "border border-success/30 shadow-success/10"}`}>
            {isError ? (
              <AlertCircle size={18} className="text-red-400" />
            ) : (
              <CheckCircle size={18} className="text-success" />
            )}
            <span className="text-sm font-medium">{message}</span>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded transition-colors"
            >
              <X size={14} className="text-text-muted" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }
      setSubmitted(true);
      showToast(contactSection.messageSuccess);
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSending(false);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      showToast(contactSection.copyEmailSuccess);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = contactInfo.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      showToast(contactSection.copyEmailSuccess);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <>
      <section id={contactSection.sectionId} className="py-24 md:py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 text-center"
          >
            <span className="text-neon-cyan font-mono text-sm tracking-wider uppercase">
              {contactSection.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              {contactSection.title} <span className="text-gradient">{contactSection.titleHighlight}</span>
            </h2>
            <p className="text-text-secondary mt-4 max-w-xl mx-auto">
              {contactSection.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-cyan/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12 relative"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="inline-block"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan/20 to-success/20 flex items-center justify-center mb-6 mx-auto">
                      <CheckCircle size={40} className="text-success" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{contactSection.successTitle}</h3>
                  <p className="text-text-secondary">
                    {contactSection.successMessage}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6 relative"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className={`absolute left-0 transition-all duration-200 ${
                          focused === "name" || formState.name
                            ? "-top-6 text-sm text-neon-cyan"
                            : "top-4 text-text-muted"
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b-2 border-border-subtle py-3 text-text-primary focus:outline-none focus:border-neon-cyan transition-colors"
                      />
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="email"
                        className={`absolute left-0 transition-all duration-200 ${
                          focused === "email" || formState.email
                            ? "-top-6 text-sm text-neon-cyan"
                            : "top-4 text-text-muted"
                        }`}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                        className="w-full bg-transparent border-b-2 border-border-subtle py-3 text-text-primary focus:outline-none focus:border-neon-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="subject"
                      className={`absolute left-0 transition-all duration-200 ${
                        focused === "subject" || formState.subject
                          ? "-top-6 text-sm text-neon-cyan"
                          : "top-4 text-text-muted"
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b-2 border-border-subtle py-3 text-text-primary focus:outline-none focus:border-neon-cyan transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-0 transition-all duration-200 ${
                        focused === "message" || formState.message
                          ? "-top-6 text-sm text-neon-cyan"
                          : "top-4 text-text-muted"
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className="w-full bg-transparent border-b-2 border-border-subtle py-3 text-text-primary focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-bg-primary font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40 transition-shadow disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-bg-primary border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="mt-12 pt-8 border-t border-border-subtle relative">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={16} className="text-neon-cyan" />
                    <span className="text-text-secondary">{contactInfo.email}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      title="Copy email"
                    >
                      <Copy size={14} className="text-text-muted hover:text-neon-cyan" />
                    </motion.button>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={16} className="text-neon-cyan" />
                    <span className="text-text-secondary">{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock size={16} className="text-neon-cyan" />
                    <span className="text-text-secondary">{contactInfo.availability}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <MagneticButton
                    onClick={() => window.open("https://github.com", "_blank")}
                    className="p-3 glass rounded-xl hover:bg-neon-cyan/10 hover:border-neon-cyan/30 border border-border-subtle transition-all"
                    title="GitHub"
                  >
                    <span className="text-text-secondary hover:text-neon-cyan">
                      {socialIcons.github}
                    </span>
                  </MagneticButton>
                  <MagneticButton
                    onClick={() => window.open("https://linkedin.com", "_blank")}
                    className="p-3 glass rounded-xl hover:bg-neon-cyan/10 hover:border-neon-cyan/30 border border-border-subtle transition-all"
                    title="LinkedIn"
                  >
                    <span className="text-text-secondary hover:text-neon-cyan">
                      {socialIcons.linkedin}
                    </span>
                  </MagneticButton>
                  <MagneticButton
                    onClick={() => window.open(`mailto:${contactInfo.email}`, "_blank")}
                    className="p-3 glass rounded-xl hover:bg-neon-cyan/10 hover:border-neon-cyan/30 border border-border-subtle transition-all"
                    title="Email"
                  >
                    <span className="text-text-secondary hover:text-neon-cyan">
                      {socialIcons.email}
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
        type={submitted || copied ? "success" : "error"}
      />
    </>
  );
}
