export default class Log {
	static Info(source: String, message: string) {
		console.info(
			`%c${source}` + `%c${message}`,
			"background-color: #00efe1; padding: 1px 7px 2px 7px; border-radius: 3px 0 0 3px;",
			"background-color: #00efe144; padding: 1px 5px 2px 5px; border-radius: 0 3px 3px 0;"
		);
	}

	static Error(source: String, message: string) {
		console.error(
			`%c${source}` + `%c${message}`,
			"background-color: #ff6060; padding: 1px 7px 2px 7px; border-radius: 3px 0 0 3px;",
			"background-color: #ff606044; padding: 1px 5px 2px 5px; border-radius: 0 3px 3px 0;"
		);
	}

  static Warning(source: String, message: string) {
    console.warn(
      `%c${source}` + `%c${message}`,
      "background-color: #ffcc00; padding: 1px 7px 2px 7px; border-radius: 3px 0 0 3px;",
      "background-color: #ffcc0044; padding: 1px 5px 2px 5px; border-radius: 0 3px 3px 0;"
    );
  }
}
