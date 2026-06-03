"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";

// Validação com Zod (Sênior pattern)
const contactSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
  honeypot: z.string().max(0, "Robôs não passarão"), // Armadilha para bots
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    tl.from(".contact-anim", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: sectionRef });

  const onSubmit = async (data: ContactFormData) => {
    // Se o campo honeypot for preenchido, é um bot, rejeita silenciosamente
    if (data.honeypot) return;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "102df5dc-338d-46ce-a58c-bced646e2f9f",
          name: data.name,
          email: data.email,
          message: data.message,
          subject: "Novo Contato via Portfólio (Kauan Takeshi)",
          from_name: "Portfólio Web"
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setSubmitError(false);
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Erro ao enviar form:", error);
      setSubmitError(true);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 max-w-4xl mx-auto relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none -z-10" style={{ background: 'radial-gradient(circle, rgba(132, 204, 22, 0.1) 0%, transparent 70%)' }} />

      <div className="text-center mb-16 contact-anim">
        <h2 className="text-4xl md:text-5xl font-bold font-space text-white mb-4">Pronto para o próximo nível?</h2>
        <p className="text-zinc-400 text-lg">
          Estou disponível para novas oportunidades. Me mande uma mensagem e vamos conversar sobre como posso ajudar o seu time.
        </p>
      </div>

      <div className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 md:p-12 contact-anim shadow-2xl">
        {isSubmitted ? (
          <div className="contact-anim bg-white/[0.03] backdrop-blur-xl border border-lime-500/30 rounded-2xl p-12 text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Mensagem Enviada!</h3>
            <p className="text-zinc-400">Obrigado por entrar em contato. Retornarei o mais breve possível.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-6">
            
            {/* Campo invisível anti-spam */}
            <input type="text" {...register("honeypot")} className="hidden" aria-hidden="true" tabIndex={-1} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 contact-anim">
                <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Como você se chama?</label>
                <input 
                  id="name"
                  {...register("name")}
                  className={`w-full bg-white/[0.02] backdrop-blur-sm border ${errors.name ? 'border-red-500/50' : 'border-white/[0.08]'} rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-500/50 transition-colors shadow-inner`}
                  placeholder="Seu nome"
                />
                {errors.name && <span className="text-red-400 text-xs ml-1">{errors.name.message}</span>}
              </div>

              <div className="space-y-2 contact-anim">
                <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Seu melhor e-mail</label>
                <input 
                  id="email"
                  {...register("email")}
                  className={`w-full bg-white/[0.02] backdrop-blur-sm border ${errors.email ? 'border-red-500/50' : 'border-white/[0.08]'} rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-500/50 transition-colors shadow-inner`}
                  placeholder="voce@empresa.com"
                />
                {errors.email && <span className="text-red-400 text-xs ml-1">{errors.email.message}</span>}
              </div>
            </div>

            <div className="space-y-2 contact-anim">
              <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Sua mensagem</label>
              <textarea 
                id="message"
                {...register("message")}
                rows={5}
                className={`w-full bg-white/[0.02] backdrop-blur-sm border ${errors.message ? 'border-red-500/50' : 'border-white/[0.08]'} rounded-xl px-5 py-4 text-white focus:outline-none focus:border-lime-500/50 transition-colors resize-none shadow-inner`}
                placeholder="Fale um pouco sobre a vaga ou projeto..."
              />
              {errors.message && <span className="text-red-400 text-xs ml-1">{errors.message.message}</span>}
            </div>

            {submitError && (
              <div className="contact-anim bg-red-500/10 border border-red-500/50 rounded-xl p-4 text-red-400 text-sm text-center">
                Ocorreu um erro de conexão ao tentar enviar a mensagem. Por favor, tente novamente ou me chame no LinkedIn!
              </div>
            )}

            <div className="contact-anim">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-bold text-lg py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"} <Send className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
