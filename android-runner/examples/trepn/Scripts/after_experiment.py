from AndroidRunner.Device import Device
import subprocess

# noinspection PyUnusedLocal
def main(device: Device, *args: tuple, **kwargs: dict):
	subprocess.run(['fuser', '-k', '8081/tcp'])

							
