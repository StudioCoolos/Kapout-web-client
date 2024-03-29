import { defineStore } from 'pinia'
import { ref } from 'vue'

const useDeviceStore = defineStore('device', () => {
	/**
	 * @type {import('vue').Ref<'portrait' | 'landscape'>}
	 */
	const orientationMode = ref('landscape')

	/**
	 * @param {'portrait' | 'landscape'} mode
	 */
	function setOrientationMode(mode) {
		orientationMode.value = mode
	}

	return { orientationMode, setOrientationMode }
})

export default useDeviceStore
