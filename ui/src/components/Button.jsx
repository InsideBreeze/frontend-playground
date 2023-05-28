import React from "react";

const Button = () => {
  return (
    <div>
      <button
        className="
				px-8 py-3 rounded-[8px] font-semibold shadow-2xl relative
			bg-[conic-gradient(from_var(--shinner-angle),theme(colors.slate.950)_0%,theme(colors.slate.100)_10%,theme(colors.slate.950)_20%)]
				animate-[shinner_2.5s_linear_infinite]
				after:absolute after:inset-[1px] after:bg-slate-900 after:rounded-[6px]
				after:content-[attr(aria-label)]
				after:flex after:items-center after:justify-center
			"
        aria-label="Login with Google"
      >
        <span className="opacity-0">Login with Google</span>
      </button>
    </div>
  );
};

export default Button;
